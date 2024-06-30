import { type Database } from '../types/database'

type ApartmentsEntity = Database['public']['Tables']['apartments']['Row']
type OwnerEntity = Database['public']['Views']['owner']['Row']

export type Apartments = ApartmentsEntity & {
  user: OwnerEntity
}