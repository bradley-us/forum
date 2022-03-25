const CodeBox = ({children, classNameCodeBox} : {children: any, classNameCodeBox?: any}) => {
  return (
    <div className={`${classNameCodeBox} text-xs font-normal border rounded-lg border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-600`}>
      <pre>
<code>
  {children}
</code>
      </pre>
    </div>
  )
}

export default CodeBox