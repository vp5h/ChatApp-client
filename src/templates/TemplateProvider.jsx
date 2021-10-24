import React from 'react';
import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const TemplateContext = React.createContext(null);

export const TemplateProvider = ({ children }) => {
    const matches = useMediaQuery('(min-width:800px)')
    const theme = matches ? createMuiTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 88,
                    top: 35,
                    height: '91%',
                    width: '33%',
                    boxShadow: 'none'
                }
            }
        }
    }):
    
    createMuiTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: "9vw",
                    top: '3.2vh',
                    height: '91%',
                    width: '82vw',
                    boxShadow: 'none'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export default TemplateProvider;