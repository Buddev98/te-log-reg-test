import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

export function AuthCard() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {activeTab === "login" ? "Welcome back" : "Create an account"}
        </CardTitle>
        <CardDescription className="text-center">
          {activeTab === "login" 
            ? "Enter your credentials to access your account" 
            : "Fill in the form below to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue="login" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TabsContent value="login" className="mt-0">
                <LoginForm />
              </TabsContent>
              <TabsContent value="register" className="mt-0">
                <RegisterForm />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        {activeTab === "login" ? (
          <p>
            Don't have an account?{" "}
            <button 
              onClick={() => setActiveTab("register")}
              className="text-primary underline-offset-4 hover:underline"
            >
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button 
              onClick={() => setActiveTab("login")}
              className="text-primary underline-offset-4 hover:underline"
            >
              Login
            </button>
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
