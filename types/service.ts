import { ServiceDetail } from './servicedetail'

export type Service = {
  id: number | null,
  title: string | null,
  description: string | null,
  photoUrl: string | null,
  content: ServiceDetail | null,
}
