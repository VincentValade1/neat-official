function MainDisplay ({ title, className, children }) {
    return (
        <main className='mainDisplay'>
            <h1>{title}</h1>
            <section className={`mainContentDiv ${className}`}>
                {children}
            </section>
        </main>
    )
}

export default MainDisplay;