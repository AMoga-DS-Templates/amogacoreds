'use client'

import { FilesTemplatePage } from '@/standard-pages/files-template'
import folders from '@/standard-pages/files-template/files-template.mock.json'

export default function FilesTemplateRoute() {
  return <FilesTemplatePage data={folders} />
}
