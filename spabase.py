
import os
from supabase import create_client, Client
url='https://frywdlmmvfdyhcxqytfq.supabase.co'
key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeXdkbG1tdmZkeWhjeHF5dGZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODgxMjkwNSwiZXhwIjoyMDI0Mzg4OTA1fQ.kuwyj8COuOUtT8giHhMcDX99VJzkn2SqFV4oPN9n8y4'
# url: str = os.environ.get("SUPABASE_URL")
# key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

res = supabase.storage.list_buckets()

with open('output.mp3', 'rb') as f:
    supabase.storage.from_("audio's").upload(file=f,path='first', file_options={"content-type": "audio/mpeg"})
