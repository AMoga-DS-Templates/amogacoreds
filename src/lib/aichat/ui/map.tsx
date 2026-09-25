"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { z } from "zod";
import {
  Map as ShadcnMap,
  MapMarker as ShadcnMapMarker,
  MarkerContent,
} from "@/components/ui/map";

import { getJsonProps } from "../helpers";
import { defineComponent } from "../json-component";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "@/constants/mapconfig";

const MapMarkerSchema = z.object({
  title: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
});

type MapMarkerProps = {
  title: string;
  latitude: number;
  longitude: number;
  subtitle?: string;
  description?: string;
};

function MapView({
  markers,
  centerLatitude,
  centerLongitude,
  zoom,
  height,
}: {
  markers: MapMarkerProps[];
  centerLatitude?: number;
  centerLongitude?: number;
  zoom?: number;
  height?: number;
}) {
  const resolvedHeight = height ?? 320;
  const [selectedMarker, setSelectedMarker] = useState<MapMarkerProps | null>(
    () => (markers.length === 1 ? markers[0] : null),
  );

  const center = useMemo(() => {
    if (
      Number.isFinite(centerLatitude) &&
      Number.isFinite(centerLongitude)
    ) {
      return [Number(centerLongitude), Number(centerLatitude)] as [number, number];
    }

    if (markers.length === 0) {
      return DEFAULT_CENTER;
    }

    const averageLatitude =
      markers.reduce((total, marker) => total + marker.latitude, 0) / markers.length;
    const averageLongitude =
      markers.reduce((total, marker) => total + marker.longitude, 0) / markers.length;

    return [averageLongitude, averageLatitude] as [number, number];
  }, [centerLatitude, centerLongitude, markers]);

  const resolvedZoom = zoom ?? (markers.length === 1 ? 10 : DEFAULT_ZOOM);

  if (markers.length === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
        No map locations available.
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl border bg-card shadow-sm"
      style={{ height: `${resolvedHeight}px` }}
    >
      <ShadcnMap
        center={center}
        zoom={resolvedZoom}
        className="h-full w-full"
      >
        {markers.map((marker) => (
          <ShadcnMapMarker
            key={`${marker.title}-${marker.latitude}-${marker.longitude}`}
            longitude={marker.longitude}
            latitude={marker.latitude}
            onClick={() => setSelectedMarker(marker)}
          >
            <MarkerContent>
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full shadow-md ring-2 ring-background transition-transform ${
                  selectedMarker?.title === marker.title &&
                  selectedMarker?.latitude === marker.latitude &&
                  selectedMarker?.longitude === marker.longitude
                    ? "scale-110 bg-primary text-primary-foreground"
                    : "bg-primary/85 text-primary-foreground"
                }`}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-current" />
              </div>
            </MarkerContent>
          </ShadcnMapMarker>
        ))}
      </ShadcnMap>

      {selectedMarker ? (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 sm:inset-x-auto sm:right-3 sm:max-w-[320px]">
          <div className="pointer-events-auto relative rounded-xl border bg-popover/95 p-3 pr-9 shadow-lg backdrop-blur">
            <button
              type="button"
              aria-label="Close marker details"
              onClick={() => setSelectedMarker(null)}
              className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="font-medium text-foreground">{selectedMarker.title}</div>
            {selectedMarker.subtitle ? (
              <div className="mt-1 text-sm text-muted-foreground">
                {selectedMarker.subtitle}
              </div>
            ) : null}
            {selectedMarker.description ? (
              <div className="mt-2 text-sm text-foreground">
                {selectedMarker.description}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export const MapMarker = defineComponent({
  name: "MapMarker",
  props: MapMarkerSchema,
  description:
    "Single marker for Map. Requires title, latitude, and longitude. Optional subtitle and description show in popup.",
  component: () => null,
});

const MapSchema = z.object({
  markers: z.array(MapMarker.ref),
  centerLatitude: z.number().optional(),
  centerLongitude: z.number().optional(),
  zoom: z.number().optional(),
  height: z.number().optional(),
});

export const Map = defineComponent({
  name: "Map",
  props: MapSchema,
  description:
    "Interactive geographic map using Leaflet and OpenStreetMap. Use MapMarker references for markers. Optional centerLatitude, centerLongitude, zoom, and height.",
  component: ({ props }) => {
    const markers = ((props.markers ?? []) as unknown[])
      .map((marker) => getJsonProps(marker) as MapMarkerProps | null)
      .filter(
        (marker): marker is MapMarkerProps =>
          Boolean(marker) &&
          Number.isFinite(marker?.latitude) &&
          Number.isFinite(marker?.longitude),
      );

    return (
      <MapView
        markers={markers}
        centerLatitude={props.centerLatitude}
        centerLongitude={props.centerLongitude}
        zoom={props.zoom}
        height={props.height}
      />
    );
  },
});


