function NotFound() {

    useEffect(() => {
        document.title = "404 Page Not Found | EN-Notes";
    }, []);

    return <div>
        <h1>404 Not Found</h1>
        <p>The page you're looking for doesn't exist!</p>
    </div>
}

export default NotFound