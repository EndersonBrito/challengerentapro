import { type Database } from '../types/database'
import { type Apartments } from './apartament' 

type RoomsEntity = Database['public']['Tables']['rooms']['Row']

export type Rooms= RoomsEntity & {
  apartament: Apartments
}