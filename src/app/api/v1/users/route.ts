import { connect } from '@/config/database'
import user from '@/model/user'
const bcrypt = require('bcryptjs')
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()
    const userBody = new user({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8),
    })
    const result = await userBody.save()
    return NextResponse.json({
      message: 'User created successfully',
      status: 201,
      result,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
