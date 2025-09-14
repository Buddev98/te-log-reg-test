import { ThemeProvider } from "./components/theme-provider";
import { AuthCard } from "./components/auth/auth-card";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background to-muted/50">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Authentication</h1>
            <p className="text-muted-foreground">Secure login and registration system</p>
          </div>
          <AuthCard />
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
