import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, UserCog, Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Activity className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hospital Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive solution for managing patients, doctors, and appointments with ease
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12 max-w-5xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Patient Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complete CRUD operations for patient records including medical history and personal details
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-all">
            <CardHeader>
              <UserCog className="h-10 w-10 text-secondary mb-2" />
              <CardTitle>Doctor Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Manage doctor profiles, specializations, qualifications, and consultation fees
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-all">
            <CardHeader>
              <Calendar className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Schedule, update, and manage appointments with real-time status tracking
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
