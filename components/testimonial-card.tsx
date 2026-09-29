interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <div className="flex flex-col space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex-1">
        <svg
          className="h-8 w-8 text-blue-300"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.3 2.8c-5 .4-9 4.5-9.3 9.6-.2 3.8 1.3 7.2 4 9.5.5.4 1.2.3 1.6-.2.4-.5.3-1.2-.2-1.6-2.2-1.9-3.4-4.7-3.2-7.8.2-4 3.5-7.3 7.5-7.7 4.6-.4 8.5 3.2 8.5 7.7 0 2.4-1.1 4.6-3 6-1.3 1-1.5 1.2-1.5 2.5v.4c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-.2c0-.7.1-.7.7-1.2 2.3-1.9 3.7-4.7 3.7-7.7-.1-5.5-5.1-9.8-10.5-9.3z" />
          <path d="M12 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </div>
      <p className="text-gray-600">{quote}</p>
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-bold">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="text-sm font-medium">{author}</p>
          <p className="text-xs text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  )
}
