import styled from 'styled-components'

export const FormVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 6px;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  input {
    height: 40px;
    padding: 0 16px;
    outline-color: var(--cor-principal);
  }

  @media (max-width: 499px) {
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
`

export const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  cursor: pointer;
`
