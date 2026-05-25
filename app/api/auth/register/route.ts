import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร' }, { status: 400 })
    }

    // TODO: Replace with your real DB logic
    // const existing = await db.user.findUnique({ where: { email } })
    // if (existing) return NextResponse.json({ message: 'อีเมลนี้ถูกใช้งานแล้ว' }, { status: 409 })
    // const hashed = await bcrypt.hash(password, 12)
    // await db.user.create({ data: { name, email, password: hashed } })

    return NextResponse.json({ message: 'สมัครสมาชิกสำเร็จ' }, { status: 201 })
  } catch {
    return NextResponse.json({ message: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' }, { status: 500 })
  }
}
