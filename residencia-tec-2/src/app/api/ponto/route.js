import { NextResponse } from 'next/server';


export async function POST(request) {
  try {
   
    const dados = await request.json();
    

    console.log("💾 [SERVIDOR] Recebi um registro de ponto:", dados);

    
    if (!dados.coordenadas && !dados.endereco) {
      return NextResponse.json(
        { erro: "Localização é obrigatória!" },
        { status: 400 }
      );
    }

 
    return NextResponse.json({ 
      mensagem: "Ponto registrado com sucesso no servidor!",
      horarioRegistrado: new Date().toISOString(),
      recibo: Math.random().toString(36).substring(7) 
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { erro: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}