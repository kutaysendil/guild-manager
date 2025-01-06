// Database tabloları için types
export type Game = {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  features: Record<string, any>;
  created_at: string;
};

export type Guild = {
  id: string;
  name: string;
  description: string | null;
  logo_url: string | null;
  owner_id: string;
  created_at: string;
  updated_at: string;
  settings: Record<string, any>;
  discord_id: string | null;
};

export type GuildGame = {
  guild_id: string;
  game_id: string;
  game_specific_data: Record<string, any>;
  server_name: string | null;
  guild_name_in_game: string | null;
  created_at: string;
};

// Admin kullanıcılar için type
export type AdminUser = {
  id: string;
  user_id: string;
  created_at: string;
};

// Response tipleri için
export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};

// Guild oluşturma için input type
export type CreateGuildInput = {
  name: string;
  description?: string;
  logo_url?: string;
  discord_id?: string;
};

// Guild güncelleme için input type
export type UpdateGuildInput = Partial<CreateGuildInput>;
