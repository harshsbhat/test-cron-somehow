import { NextResponse } from 'next/server';

let requestCount = 0;

export async function GET() {
  requestCount++;
  
  if (requestCount % 5 === 0) {
    return NextResponse.json(
      { error: 'This is the 5th request - failing as designed' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { 
      message: 'Hello!',
      currentCount: requestCount,
      nextFailureIn: 5 - (requestCount % 5)
    },
    { status: 200 }
  );
}