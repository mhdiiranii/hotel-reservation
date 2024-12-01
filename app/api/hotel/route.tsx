export async function GET(req: Request) {
    try {
      const response = await fetch('http://localhost:3004/post');
      const data: { name: string; age: number } = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch data' }),
        { status: 500 }
      );
    }
  }