import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ukstxecpazjdfqwoozlo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrc3R4ZWNwYXpqZGZxd29vemxvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjg4Nzk1OCwiZXhwIjoyMDUyNDYzOTU4fQ.CCJg1meHqC2ZEaZ3cgpHo-ppf5PlWfmfCNu7xMdGr6I"
);

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );
