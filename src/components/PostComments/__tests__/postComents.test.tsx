import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Post from '../index' // Ajuste o caminho

describe('Testes para o componente Post', () => {
  test('deve permitir inserir dois comentários', async () => {
    render(<Post />)

    const textarea = screen.getByTestId('textarea')
    const botao = screen.getByTestId('botao-enviar')

    await userEvent.type(textarea, 'Primeiro comentário')
    await userEvent.click(botao)
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()

    await userEvent.type(textarea, 'Segundo comentário')
    await userEvent.click(botao)
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})
