import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-xs text-center space-y-4">
          <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="size-10 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Bharat Identity</h1>
            <p className="text-sm text-muted-foreground">Government-ready KYC • सुरक्षित और तेज़</p>
          </div>
          <div className="text-xs text-muted-foreground">Loading…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-md p-4 space-y-6">
        <div className="overflow-hidden rounded-xl border">
          <div
            className="h-40 bg-cover bg-center"
            style={{ backgroundImage: 'url(/illustrations/welcome.jpg)' }}
          />
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <img src="/illustrations/method.jpg" alt="Gov Logo" className="h-8 w-8 rounded object-cover" />
              <h1 className="text-2xl font-bold">Bharat Identity KYC</h1>
            </div>
            <p className="text-muted-foreground">Fast, secure, offline-friendly onboarding</p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button asChild>
                <Link to="/secure">Secure Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/kyc">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Choose Language / भाषा चुनें</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button variant="outline">English</Button>
            <Button variant="outline">हिंदी</Button>
            <Button variant="outline">தமிழ் (Tamil)</Button>
            <Button variant="outline">తెలుగు (Telugu)</Button>
            <Button variant="outline">বাংলা (Bengali)</Button>
            <Button variant="outline">मराठी (Marathi)</Button>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Start Flow / शुरुआत करें</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Guided KYC with 8 key screens</p>
              <Button asChild className="w-full">
                <Link to="/kyc">Open KYC Flow</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Offline Simulator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Toggle connectivity during the flow</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/kyc">Launch with Offline Banner</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">View sample KPIs</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard">Open Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}