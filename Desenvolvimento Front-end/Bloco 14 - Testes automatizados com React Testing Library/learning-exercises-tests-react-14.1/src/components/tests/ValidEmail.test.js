import React from "react";
import { render, screen } from "@testing-library/react";
import ValidEmail from "../ValidEmail";

describe('Verificar se o email aparece de acordo com o que é esperado', ()=>{
  it('Se o email estiver correto aparece a mensagem "Email Válido"', ()=>{
    const EMAIL_USER= 'user@user.com';
    render(<ValidEmail email={ EMAIL_USER } />)
    const EmailValid = screen.getByText(/Email Válido/i);
    expect(EmailValid).toBeInTheDocument();
  })

  it('Se o email estiver ERRADO aparece a mensagem "Email Inválido"', ()=>{
    render(<ValidEmail email='qualquerCoisa' />)
    const EmailValid = screen.getByText(/Email inválido/i);
    expect(EmailValid).toBeInTheDocument();
  })
})
