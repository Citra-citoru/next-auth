import { connect } from '@/config/database';
import User from '@/model/user';
const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from 'next/server';

connect()
export async function POST(req: NextRequest) {
    try{
      const { email, password } = await req.json();
      const user = await User.findOne({email: email});
      if (!user) {
        return NextResponse.json({error: "invalid user/password"}, {status: 403});
      }
  
      var passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return NextResponse.json({error: "invalid user/password"}, {status: 403});
      }else{
        return NextResponse.json({
          message: 'Sign in successfully',
          status: 200,
          user,
        })
      }
  
    } catch(error: any){
      return NextResponse.json({ error: error.message }, { status: 500 });
    };
  }