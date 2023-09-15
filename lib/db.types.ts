export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      shots: {
        Row: {
          created_at: string
          desc: string
          id: number
          image_url: string
          title: string
          user_data: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          desc: string
          id?: number
          image_url: string
          title: string
          user_data: Json
          user_id: string
        }
        Update: {
          created_at?: string
          desc?: string
          id?: number
          image_url?: string
          title?: string
          user_data?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shots_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
