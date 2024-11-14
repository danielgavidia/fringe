import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ProfileType } from "@/types/types";
import { Button } from "./ui/button";

interface XUpdateProfileProps {
  profileType: ProfileType;
  onUpdateApplicant?: (
    name: string,
    location: string,
    experience: string,
    education: string
  ) => void;
  onUpdateCompany?: (
    name: string,
    location: string,
    employeeCount: number,
    yearsOfOperation: number,
    industry: string,
    fundingRound: string
  ) => void;
}

const XUpdateProfile = ({
  profileType,
  onUpdateApplicant,
  onUpdateCompany,
}: XUpdateProfileProps) => {
  // General
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  // Applicant
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [portfolios, setPortfolios] = useState([
    { title: "", link: "" },
    { title: "", link: "" },
    { title: "", link: "" },
  ]);

  // Company
  const [employeeCount, setEmployeeCount] = useState(0);
  const [yearsOfOperation, setYearsOfOperation] = useState(0);
  const [industry, setIndustry] = useState("");
  const [fundingRound, setFundingRound] = useState("");

  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (profileType === "applicant" && onUpdateApplicant) {
      onUpdateApplicant(name, location, experience, education);
    } else if (profileType === "company" && onUpdateCompany) {
      onUpdateCompany(name, location, employeeCount, yearsOfOperation, industry, fundingRound);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4" onSubmit={handleUpdateProfile}>
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>Location</Label>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          {/* Applicant */}
          {profileType === "applicant" && (
            <>
              {/* Experience */}
              <div>
                <Label>Experience</Label>
                <Textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
              </div>

              {/* Education */}
              <div>
                <Label>Education</Label>
                <Textarea value={education} onChange={(e) => setEducation(e.target.value)} />
              </div>

              {/* Portfolio */}
              <div className="space-y-2">
                <Label>Portfolio</Label>
                {portfolios.map((portfolio, index) => (
                  <div key={index} className="space-y-2">
                    <Label className="font-thin">Portfolio Piece #{index + 1}</Label>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <Label className="font-thin text-xs">Title</Label>
                        <Input
                          value={portfolio.title}
                          onChange={(e) => {
                            const newPortfolios = [...portfolios];
                            newPortfolios[index].title = e.target.value;
                            setPortfolios(newPortfolios);
                          }}
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <Label className="font-thin text-xs">Link</Label>
                        <Input
                          value={portfolio.link}
                          onChange={(e) => {
                            const newPortfolios = [...portfolios];
                            newPortfolios[index].link = e.target.value;
                            setPortfolios(newPortfolios);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* Company */}
          {profileType === "company" && (
            <>
              <div>
                <Label>Employee Count</Label>
                <Input
                  type="number"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                />
              </div>
              <div>
                <Label>Years of Operation</Label>
                <Input
                  type="number"
                  value={yearsOfOperation}
                  onChange={(e) => setYearsOfOperation(parseInt(e.target.value))}
                />
              </div>
              <div>
                <Label>Industry</Label>
                <Input value={industry} onChange={(e) => setIndustry(e.target.value)} />
              </div>
              <div>
                <Label>Funding Round</Label>
                <Input value={fundingRound} onChange={(e) => setFundingRound(e.target.value)} />
              </div>
            </>
          )}
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default XUpdateProfile;