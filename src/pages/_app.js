import {ColorModeContext, useMode} from "@/theme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import '@/styles/globals.css'

export default function App({Component, pageProps}) {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <main className="content">
                        <Component {...pageProps} />
                    </main>

                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
