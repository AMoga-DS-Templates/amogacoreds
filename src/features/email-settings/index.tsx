'use client'

import React, { useState } from 'react'
import { ProfileTab } from './components/profile-tab'
import { FilesTab } from './components/files-tab'
import { ChatTab } from './components/chat-tab'
import { AiTab } from './components/ai-tab'
import { LinksTab } from './components/accounts-tab'
import { EmailFilesTab } from './components/email-files-tab'
import { AuthTab } from './components/auth-tab'
import { ThemesTab } from './components/themes-tab'
import { PhonePreview } from './components/phone-preview'
import { AppHeader } from '@/components/layout/app-header'
import { Main } from '@/components/layout/main'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { LineTab } from '@/components/ui/line-tab'
import { Button } from '@/components/ui/button'
import { ComingSoon } from '@/components/coming-soon'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Smartphone } from 'lucide-react'

export default function EmailSettingsFeature() {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className='flex h-full flex-col w-full overflow-hidden bg-background text-foreground'>
      <AppHeader title='App Settings' />

      <Main fixed className='flex flex-grow flex-1 min-h-0 overflow-hidden p-3 sm:p-4 md:p-6'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 w-full h-full overflow-hidden">

          {/* Left Panel: Tabs Control Panel */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-0 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full min-h-0 overflow-hidden">

              <LineTab />

              <div className="flex-1 overflow-y-auto no-scrollbar pr-0 sm:pr-1 pb-20 lg:pb-6 space-y-4">
                <TabsContent value="profile" className="mt-0 focus-visible:outline-none">
                  <ProfileTab />
                </TabsContent>
                <TabsContent value="files" className="mt-0 focus-visible:outline-none">
                  <FilesTab />
                </TabsContent>
                <TabsContent value="chat" className="mt-0 focus-visible:outline-none">
                  <ChatTab />
                </TabsContent>
                <TabsContent value="ai" className="mt-0 focus-visible:outline-none">
                  <AiTab />
                </TabsContent>
                <TabsContent value="links" className="mt-0 focus-visible:outline-none">
                  <LinksTab />
                </TabsContent>
                <TabsContent value="email-files" className="mt-0 focus-visible:outline-none">
                  <EmailFilesTab />
                </TabsContent>
                <TabsContent value="auth" className="mt-0 focus-visible:outline-none">
                  <AuthTab />
                </TabsContent>
                <TabsContent value="theme" className="mt-0 focus-visible:outline-none">
                  <ThemesTab />
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Panel: iPhone Live Mockup — desktop only */}
          <div className="hidden lg:flex lg:col-span-5 min-h-0 overflow-y-auto overflow-x-hidden bg-muted/10 border rounded-2xl flex-col items-center px-4 py-6 shadow-inner">
            <PhonePreview activeSettingsTab={activeTab} />
          </div>
        </div>
      </Main>

      {/* Mobile floating preview button */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <Button
          onClick={() => setPreviewOpen(true)}
          className="h-12 px-5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg gap-2 cursor-pointer"
        >
          <Smartphone className="h-4 w-4" />
          Preview
        </Button>
      </div>

      {/* Mobile preview sheet */}
      <Sheet open={previewOpen} onOpenChange={setPreviewOpen}>
        <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl px-4 pt-6 pb-8 overflow-y-auto">
          <SheetHeader className="mb-2">
            <SheetTitle>Live Preview</SheetTitle>
            <SheetDescription>
              See how your authentication & email configurations look on a mobile mockup preview.
            </SheetDescription>
          </SheetHeader>
          <div className="flex items-start justify-center h-full overflow-y-auto pt-2 pb-4">
            <PhonePreview compact activeSettingsTab={activeTab} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
