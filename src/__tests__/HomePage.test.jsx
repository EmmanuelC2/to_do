import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

// Mock `use-local-storage` so tests control initial state and updates without touching real storage.
vi.mock('use-local-storage', () => ({
  default: (key, initialValue) => React.useState(initialValue),
}))

describe('HomePage to-do interactions', () => {
  test('adds a task via Enter and clears input', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByPlaceholderText('Enter a task...')
    await user.type(input, 'Buy milk{enter}')

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  test('adds tasks via button and deletes the first one', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByPlaceholderText('Enter a task...')
    const addButton = screen.getByRole('button', { name: 'Add' })

    await user.type(input, 'Task A')
    await user.click(addButton)

    await user.type(input, 'Task B')
    await user.click(addButton)

    const list = screen.getByRole('list')
    const items = within(list).getAllByRole('listitem')
    // New tasks are prepended, so order is ["Task B", "Task A"].
    expect(items[0]).toHaveTextContent('Task B')
    expect(items[1]).toHaveTextContent('Task A')

    // Click the first delete button (trash icon label).
    const deleteButtons = screen.getAllByRole('button', { name: '🗑' })
    await user.click(deleteButtons[0])

    expect(screen.queryByText('Task B')).not.toBeInTheDocument()
    expect(screen.getByText('Task A')).toBeInTheDocument()
  })

  test('toggles dark mode updates label and theme attribute', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    const pageLayout = container.querySelector('.page-layout')
    expect(pageLayout).toHaveAttribute('data-theme', 'light')

    // Initial label reflects next action when unchecked.
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(pageLayout).toHaveAttribute('data-theme', 'dark')
    expect(screen.getByText('Light Mode')).toBeInTheDocument()
  })
})
