const Footer = () => {
  return (
    <footer className="mb-4 mt-8 flex flex-col items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
      <div>Petr Buk {`© ${new Date().getFullYear()}`}</div>
    </footer>
  )
}

export default Footer
