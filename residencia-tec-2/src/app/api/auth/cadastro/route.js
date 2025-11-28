import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    
    if (!name || !email || !password) {
      return NextResponse.json(
        { erro: "Preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    
    console.log("🆕 [CADASTRO] Novo usuário:", { name, email });

    
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      mensagem: "Usuário cadastrado com sucesso!",
      id: Math.random().toString(36).substring(7)
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { erro: "Erro ao criar conta." },
      { status: 500 }
    );
  }
}