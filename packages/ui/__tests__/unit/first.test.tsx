import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import CardBuilder from '../../src/template/_components/CardList/CardBuilder/CardBuilder';

describe('CardBuilder', () => {
  it('CardBuilder.build should render footer', () => {
  const Item = CardBuilder.build({
    footer:{
      FooterContent:()=>(<div>Footer Test</div>)
    },
    cardProps:{}
  })
  
  const { container } = render(<Item item={{name:'TestItem'}} index={0} />);
  expect(screen.getByText(/Footer Test/i)).toBeInTheDocument();
});

})