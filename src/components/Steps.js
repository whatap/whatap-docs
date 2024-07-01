import MDXContents from '@theme-original/MDXContent';

export default function InDoc ({children}) {
    return (
        <MDXContents>
            <div className="steps">
                {children}
            </div>
        </MDXContents>
    );
}