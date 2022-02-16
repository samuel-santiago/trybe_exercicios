import React from "react";
import { render, screen } from "@testing-library/react";
import ValidEmail from "../ValidEmail";
import App from "../../App";
import userEvent from "@testing-library/user-event";

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

  it('Se o email for enviado, mostrar na tela', ()=>{
    render(<App />)
    const EMAIL_USER= 'user@user.com';
    const inptEmail = screen.queryByLabelText('Email');
    const sbmtBtn = screen.getByTestId('id-send');

    userEvent.type(inptEmail , EMAIL_USER )    
    userEvent.click(sbmtBtn);

    const message = screen.getByRole('heading', {level: 3})

    expect(message).toHaveTextContent('Email Válido')

  })

  it('verificar se o EMAIL FOR VÁLIDO, A COR É VERDE', ()=>{
    render(<App />)

    const EMAIL_USER= 'user@user.com';
    const inptEmail = screen.queryByLabelText('Email');
    const sbmtBtn = screen.getByTestId('id-send');

    userEvent.type(inptEmail , EMAIL_USER )    
    userEvent.click(sbmtBtn);

    const message = screen.getByRole('heading', {level: 3})
    expect(message).toHaveAttribute('style', 'color: green;')
  })


  it('verificar se o EMAIL FOR VÁLIDO, A COR É VERMELHA', ()=>{
    render(<App />)

    const EMAIL_USER= 'café';
    const inptEmail = screen.queryByLabelText('Email');
    const sbmtBtn = screen.getByTestId('id-send');

    userEvent.type(inptEmail , EMAIL_USER )    
    userEvent.click(sbmtBtn);

    const message = screen.getByRole('heading', {level: 3})
    expect(message).toHaveAttribute('style', 'color: red;')
  })

})
