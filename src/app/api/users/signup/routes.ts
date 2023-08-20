import { connect } from "@/config/database";
import user from "@/model/user";
const Joi = require('joi');
const bcrypt = require('bcryptjs');
import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';


connect()

const createUser =  async(req: NextRequest, res: NextApiResponse) => {
    try {
        const { name, email, password } = await req.json();
        const userBody = {
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 8)
        };
        await user.create(userBody);
        res.status(201).json(user);
    } catch (error: any) {
        return res.status(500).json(error);
    }

}

export default createUser