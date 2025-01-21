import { anyone } from '@/access/anyone'
import type { CollectionConfig } from 'payload'

export const Emails: CollectionConfig = {
  slug: 'emails',
  access: {
    create: anyone,
    delete: anyone,
    read: anyone,
    update: anyone,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}
