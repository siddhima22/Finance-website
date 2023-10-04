#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np


# In[2]:


# Sample assessment results (You should replace this with your actual assessment data)
user_answers = {
    "interests": {
        "artistic": 5,
        "social": 3,
        "enterprising": 4,
        "conventional": 2,
        "investigative": 1,
        "realistic": 3,
    },
    "skills": {
        "communication": 4,
        "problem_solving": 3,
        "leadership": 2,
        "technical": 1,
    },
}

# Sample career data (You should replace this with your actual career database)
career_data = [
    {
        "name": "Software Developer",
        "interests": {"problem-solving": 4, "programming": 3},
        "skills": {"technical": 4,"programming languages": 5, "software development methodologies":4},
    },
    {
        "name": "Teacher",
        "interests": {"working with children": 5, "knowledge sharing": 4, "education": 4},
        "skills": {"communication": 5 , "subject expertise": 4},
    },
    {
        "name": "Graphic Designer",
        "interests": {"artistic": 4 , "creativity": 4,"designing":4},
        "skills": {"creative": 4,"Adobe Creative Suite":5,"design principles":4},
    },
    {
        "name": "Data Analyst",
        "interests": {"investigative": 4, "realistic": 3},
        "skills": {"analytical": 4},
    },
    {
        "name": "Nurse",
        "interests": {"medical knowledge": 5, "healthcare":4,"patient care":5},
        "skills": {"clinical assessment": 5,"biology":5,  "communication":5},
    },
    {
        "name": "Marketing Manager",
        "interests": {"marketing": 4, "consumer behavior":4,"advertising":5},
        "skills": {"strategic": 4,"analytics": 4,"creativity":5},
    },
    {
        "name": "Chef",
        "interests": {"artistic": 4,"cooking":4},
        "skills": {"culinary": 4,"menu planning":4,"food safety":4},
    },
    {
        "name": "Mechanical Engineer",
        "interests": {"realistic": 4, "problem-solving": 3,"mechanics":4,"engineering":5},
        "skills": {"Maths":5,"problem-solving":3},
    },
    {
        "name": "Artist",
        "interests": {"artistic": 5,"expressive":5},
        "skills": {"creative": 5},
    },
    {
        "name": "Financial Analyst",
        "interests": {"analytic": 4,"Maths":4},
        "skills": {"analytical": 4,"communication":5},
    },
    {
        "name": "Dentist",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"dental": 5},
    },
    {
        "name": "Journalist",
        "interests": {"investigative": 5, "artistic": 4},
        "skills": {"communication": 4},
    },
    {
        "name": "Architect",
        "interests": {"artistic": 4, "realistic": 3},
        "skills": {"design": 5},
    },
    {
        "name": "Police Officer",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"law enforcement": 5},
    },
    {
        "name": "Psychologist",
        "interests": {"social": 4, "investigative": 3},
        "skills": {"counseling": 5},
    },
    {
        "name": "Electrician",
        "interests": {"realistic": 4},
        "skills": {"electrical": 5},
    },
    {
        "name": "Fashion Designer",
        "interests": {"artistic": 5},
        "skills": {"creative": 4},
    },
    {
        "name": "Pharmacist",
        "interests": {"investigative": 4},
        "skills": {"pharmacy": 5},
    },
    {
        "name": "Civil Engineer",
        "interests": {"realistic": 4},
        "skills": {"civil engineering": 4},
    },
    {
        "name": "Firefighter",
        "interests": {"realistic": 4, "social": 3},
        "skills": {"firefighting": 5},
    },
    {
        "name": "Biologist",
        "interests": {"investigative": 4},
        "skills": {"biological research": 4},
    },
    {
        "name": "Actor",
        "interests": {"artistic": 5},
        "skills": {"acting": 5},
    },
    {
        "name": "Accountant",
        "interests": {"enterprising": 4},
        "skills": {"financial accounting": 4},
    },
    {
        "name": "Physician",
        "interests": {"investigative": 4, "social": 4},
        "skills": {"medical": 5},
    },
    {
        "name": "Interior Designer",
        "interests": {"artistic": 4},
        "skills": {"interior design": 4},
    },
    {
        "name": "IT Manager",
        "interests": {"enterprising": 4, "technical": 4},
        "skills": {"information technology": 4},
    },
    {
        "name": "Phlebotomist",
        "interests": {"realistic": 3, "social": 4},
        "skills": {"phlebotomy": 5},
    },
    {
        "name": "Musician",
        "interests": {"music": 5},
        "skills": {"music": 5},
    },
 
    {
        "name": "Pharmacist",
        "interests": {"chemistry": 4,"biology":4},
        "skills": {"attention to detail": 5},
    },
    {
        "name": "Pilot",
        "interests": {"travel": 4},
        "skills": {"communication": 5},
    },
    {
        "name": "Photographer",
        "interests": {"artistic": 4},
        "skills": {"editing": 5},
    },
    {
        "name": "Quality Analyst",
        "interests": {"technical": 4},
        "skills": {"problem solving": 4,"attention to detail": 4},
    },
    
    
    
    
    {
        "name": "Tourist Guide",
        "interests": {"travelling": 4,"history":3},
        "skills": {"communication": 4},
    },
    {
        "name": "Geologist",
        "interests": {"geography": 4},
        "skills": {"research": 4},
    },
    {
        "name": "Archaeologist",
        "interests": {"geography": 4,"history":4},
        "skills": {"research": 4},
    },
    {
        "name": "Fitness Trainer",
        "interests": {"sports": 5},
        "skills": {"communication": 5},
    },
    {
        "name": "UX Designer",
        "interests": {"artistic": 4, "technical": 3},
        "skills": {"creativity": 5,"technical":3},
    },
    
    {
        "name": "Electrical Engineer",
        "interests": {"maths": 4,"physics":4},
        "skills": {"problem solving": 4},
    },
   
    {
        "name": "Biomedical Engineer",
        "interests": {"biology": 5, "maths": 4},
        "skills": {"problem solving": 4},
    },
    
    
    
    {
        "name": "Event Planner",
        "interests": {"creativity": 4, "coordination": 4},
        "skills": {"time management": 4,"communication":5},
    },
    {
        "name": "Chemical Engineer",
        "interests": {"chemistry": 4, "maths": 4},
        "skills": {"problem solving": 4},
    },
    {
        "name": "Translator",
        "interests": {"social": 4, "artistic": 3},
        "skills": {"languages": 4},
    },
    {
        "name": "Zoologist",
        "interests": {"zoology": 4, "conservation": 3},
        "skills": {"animal care": 4,"research":4},
    },
    {
        "name": "Social Media Manager",
        "interests": {"enterprising": 4,"online trends":4},
        "skills": {"social media management": 4,"content creation":4},
    },
    {
        "name": "Astronomer",
        "interests": {"physics": 5},
        "skills": {"problem solving": 4},
    },
    {
        "name": "Doctor",
        "interests": {"biology": 4, "chemistry":4},
        "skills": {"communication": 5},
    },
    {
        "name": "Lawyer",
        "interests": {"law": 4},
        "skills": {"communication": 5,"problem solving":3},
    },
    {
        "name": "Environmental Scientist",
        "interests": {"research": 4,"ecology":4,"environmental conversation":5},
        "skills": {"environmental science": 4},
    },
]
    # Add more career entries here...


# Define a function to match assessment results to suitable careers
def match_careers(user_answers, career_data):
    matched_careers = []

    for career in career_data:
        interest_score = 0
        skill_score = 0

        # Calculate interest score based on user answers
        for interest, score in user_answers["interests"].items():
            if interest in career["interests"]:
                interest_score += score * career["interests"][interest]

        # Calculate skill score based on user answers
        for skill, score in user_answers["skills"].items():
            if skill in career["skills"]:
                skill_score += score * career["skills"][skill]

        # You can define a threshold to filter suitable careers
        if interest_score >= 10 and skill_score >= 5:
            matched_careers.append({
                "name": career["name"],
                "interest_score": interest_score,
                "skill_score": skill_score,
            })

    # Sort the matched careers by scores
    matched_careers.sort(key=lambda x: (x["interest_score"], x["skill_score"]), reverse=True)

    return matched_careers

# Find and print matched careers
# Original code ...

# Find and print the top 10 matched careers
top_matched_careers = match_careers(user_answers, career_data)[:10]

print("Top 10 Career Choices:")
for index, career in enumerate(top_matched_careers, 1):
    print(f"{index}. Career: {career['name']}")
    print(f"   Interest Score: {career['interest_score']}")
    print(f"   Skill Score: {career['skill_score']}")
    print()


# You can now provide the matched careers as recommendations to the user


# In[ ]:




