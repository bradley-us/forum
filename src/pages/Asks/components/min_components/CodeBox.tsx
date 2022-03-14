const CodeBox = ({children} : {children: any}) => {
  return (
    <div className='py-5'>
      <div className='text-xs font-normal border rounded-lg border-slate-200 bg-slate-100'>
        <pre>
  <code>
    {children}
  </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBox