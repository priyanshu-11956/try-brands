import { connectDB } from '@/lib/db/connect';
import { User } from '@/lib/db/models/user';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectDB();
    
    const { email, password } = await req.json();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }
    
    // Create new user
    const user = await User.create({ email, password });
    
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}