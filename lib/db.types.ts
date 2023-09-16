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
      profiles: {
        Row: {
          avatar_url: string
          id: string
          name: string
        }
        Insert: {
          avatar_url: string
          id: string
          name: string
        }
        Update: {
          avatar_url?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      shots: {
        Row: {
          created_at: string
          desc: string
          id: number
          image_url: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          desc: string
          id?: number
          image_url: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          desc?: string
          id?: number
          image_url?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shots_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
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
