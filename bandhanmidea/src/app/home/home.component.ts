import { Component } from '@angular/core';

interface Profile {
  name: string;
  age: number;
  location: string;
  gender: string;
  badge: string;
  tags: string[];
  initial: string;
  country?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filters = {
    gender: 'female',
    country: '',
    age: ''
  };

  profiles: Profile[] = [
    {
      name: 'আয়েশা রহমান',
      age: 24,
      location: 'ঢাকা, বাংলাদেশ',
      gender: 'female',
      badge: 'যাচাইকৃত',
      tags: ['বিএসসি', 'শিক্ষিকা', 'ধর্মপরায়ণ'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'মোহাম্মদ করিম',
      age: 24,
      location: 'লন্ডন, যুক্তরাজ্য',
      gender: 'male',
      badge: 'নতুন',
      tags: ['এমএসসি', 'ইঞ্জিনিয়ার'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'আয়েশা রহমান',
      age: 24,
      location: 'ঢাকা, বাংলাদেশ',
      gender: 'female',
      badge: 'যাচাইকৃত',
      tags: ['বিএসসি', 'শিক্ষিকা', 'ধর্মপরায়ণ'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'মোহাম্মদ করিম',
      age: 24,
      location: 'লন্ডন, যুক্তরাজ্য',
      gender: 'male',
      badge: 'নতুন',
      tags: ['এমএসসি', 'ইঞ্জিনিয়ার'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    },
    {
      name: 'সাদিয়া হক',
      age: 24,
      location: 'চট্টগ্রাম, বাংলাদেশ',
      gender: 'female',
      badge: 'বিশ্বস্ত',
      tags: ['এমবিএ', 'ফ্যামিলি-অরিয়েন্টেড'],
      initial: 'assets/Img/proflie.jpg'
    }
  ];

  filteredProfiles = [...this.profiles];

  onSearch() {
    const g = this.filters.gender;
    this.filteredProfiles = this.profiles.filter(p => p.gender === g);
  }
}
