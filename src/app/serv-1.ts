import { LevelZero, LevelOne, LevelTwo, LevelThree } from './level.model';


export const initialData =
{
  "subservices": [
    {
      "service_code": "B",
      "service_name": "Basic Needs",
      "subservices": [
        {
          "service_code": "BD",
          "service_name": "Food",
          "active": false,
          "sub_active": 0,
          "sub_count": 3,
          "subservices": [
            {
              "service_code": "BD-1800.2000",
              "service_name": "Food Pantry",
              "active": false,
              "index": 1
            },
            {
              "service_code": "BD-1800.8200-250",
              "service_name": "Formula/Baby Food",
              "active": false,
              "index": 2
            },
            {
              "service_code": "BD-5000.1470",
              "service_name": "Community Meals",
              "active": false,
              "index": 3
            }
          ]
        },
        {
          "service_code": "BH",
          "service_name": "Housing/Shelter",
          "active": false,
          "sub_active": 0,
          "sub_count": 12,
          "subservices": [
            {
              "service_code": "BH-0500",
              "service_name": "At Risk/Homeless Housing Related Assistance Programs",
              "active": false,
              "index": 1
            },
            {
              "service_code": "BH-0500.3100",
              "service_name": "Homeless Diversion Programs",
              "active": false,
              "index": 2
            },
            {
              "service_code": "BH-0500.3140",
              "service_name": "Homelessness Prevention Programs",
              "active": false,
              "index": 3
            },
            {
              "service_code": "BH-0500.7000",
              "service_name": "Rapid Re-Housing Programs",
              "active": false,
              "index": 4
            },
            {
              "service_code": "BH-1800",
              "service_name": "Emergency Shelter",
              "active": false,
              "index": 5
            },
            {
              "service_code": "BH-1800.1500-200",
              "service_name": "Family Crisis Shelters",
              "active": false,
              "index": 6
            },
            {
              "service_code": "BH-3700",
              "service_name": "Housing Counseling",
              "active": false,
              "index": 7
            },
            {
              "service_code": "BH-3800",
              "service_name": "Housing Expense Assistance",
              "active": false,
              "index": 8
            },
            {
              "service_code": "BH-3800.7000",
              "service_name": "Rent Payment Assistance",
              "active": false,
              "index": 9
            },
            {
              "service_code": "BH-3800.7250",
              "service_name": "Rental Deposit Assistance",
              "active": false,
              "index": 10
            },
            {
              "service_code": "BH-7000.4600-450",
              "service_name": "Low Income/Subsidized Private Rental Housing",
              "active": false,
              "index": 11
            },
            {
              "service_code": "BH-8600 ",
              "service_name": "Transitional Housing/Shelter",
              "active": false,
              "index": 12
            }
          ]
        },
        {
          "service_code": "BM",
          "service_name": "Material Goods",
          "active": false,
          "sub_active": 0,
          "sub_count": 3,
          "subservices": [
            {
              "service_code": "BM-3000.1000",
              "service_name": "Bedding/Linen    ",
              "active": false,
              "index": 1
            },
            {
              "service_code": "BM-3000.2000",
              "service_name": "Furniture    ",
              "active": false,
              "index": 2
            },
            {
              "service_code": "BM-6500.1500",
              "service_name": "Clothing",
              "active": false,
              "index": 3
            }
          ]
        },
        {
          "service_code": "BV",
          "service_name": "Utilities",
          "active": false,
          "sub_active": 0,
          "sub_count": 1,
          "subservices": [
            {
              "service_code": "BV-8900.9300-850",
              "service_name": "Telephone Service Payment Assistance",
              "active": false,
              "index": 1
            }
          ]
        }
      ]
    },
    {
      "service_code": "F",
      "service_name": "Criminal Justice and Legal Services",
      "subservices": [
        {
          "service_code": "FP",
          "service_name": "Legal Assistance",
          "active": false,
          "sub_active": 0,
          "sub_count": 1,
          "subservices": [
            {
              "service_code": "FP-0700.5000",
              "service_name": "Mediation",
              "active": false,
              "index": 1
            }
          ]
        },
        {
          "service_code": "FT",
          "service_name": "Legal Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 2,
          "subservices": [
            {
              "service_code": "FT-4500.1800",
              "service_name": "Eviction Prevention Legal Assistance",
              "active": false,
              "index": 1
            },
            {
              "service_code": "FT-4500.8550",
              "service_name": "Tenant Rights Information/Counseling",
              "active": false,
              "index": 2
            }
          ]
        }
      ]
    },
    {
      "service_code": "L",
      "service_name": "Healthcare",
      "subservices": [
        {
          "service_code": "LE",
          "service_name": "General Medical Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 6,
          "subservices": [
            {
              "service_code": "LE-0100",
              "service_name": "Primary Health Care",
              "active": false,
              "index": 1
            },
            {
              "service_code": "LE-0100.1000",
              "service_name": "Pediatric Care ",
              "active": false,
              "index": 2
            },
            {
              "service_code": "LE-0100.3000",
              "service_name": "Geriatric care",
              "active": false,
              "index": 3
            },
            {
              "service_code": "LE-0200",
              "service_name": "Health Assessments",
              "active": false,
              "index": 4
            },
            {
              "service_code": "LE-0300",
              "service_name": "Acute Illness care",
              "active": false,
              "index": 5
            },
            {
              "service_code": "LE-0400",
              "service_name": "Chronic Illness care",
              "active": false,
              "index": 6
            }
          ]
        },
        {
          "service_code": "LF",
          "service_name": "Health Screening/Diagnostic Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 5,
          "subservices": [
            {
              "service_code": "LF-4800",
              "service_name": "X-ray",
              "active": false,
              "index": 1
            },
            {
              "service_code": "LF-7100",
              "service_name": "Physical Examinations",
              "active": false,
              "index": 2
            },
            {
              "service_code": "LF-7100.8000",
              "service_name": "Sports Participation Physical Examinations",
              "active": false,
              "index": 3
            },
            {
              "service_code": "LF-7300",
              "service_name": "Prenatal Evaulation",
              "active": false,
              "index": 4
            },
            {
              "service_code": "LH-2700.6600",
              "service_name": "Preventive health education material",
              "active": false,
              "index": 5
            }
          ]
        },
        {
          "service_code": "LN",
          "service_name": "Outpatient Health Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 1,
          "subservices": [
            {
              "service_code": "LN-9500",
              "service_name": "Women's Health Centers",
              "active": false,
              "index": 1
            }
          ]
        },
        {
          "service_code": "LT",
          "service_name": "Specialized Treatment Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 6,
          "subservices": [
            {
              "service_code": "LT-3000",
              "service_name": "Hospice Care",
              "active": false,
              "index": 1
            },
            {
              "service_code": "LT-3000.3300",
              "service_name": "In Home Hospice Care",
              "active": false,
              "index": 2
            },
            {
              "service_code": "LT-3000.3300",
              "service_name": "Inpatient Hospice Care",
              "active": false,
              "index": 3
            },
            {
              "service_code": "LT-3000.3300",
              "service_name": "Residential Hospice Care",
              "active": false,
              "index": 4
            },
            {
              "service_code": "LT-3000.3300",
              "service_name": "Respite Hospice Care",
              "active": false,
              "index": 5
            },
            {
              "service_code": "LT-6650",
              "service_name": "Palliative Care",
              "active": false,
              "index": 6
            }
          ]
        },
        {
          "service_code": "LV",
          "service_name": "Specialized Health Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 3,
          "subservices": [
            {
              "service_code": "LV-1600",
              "service_name": "Dental Care",
              "active": false,
              "index": 1
            },
            {
              "service_code": "LV-1600.1900 ",
              "service_name": "Emergency Dental Care",
              "active": false,
              "index": 2
            },
            {
              "service_code": "LV-1600.6400",
              "service_name": "Pediatric Dentistry",
              "active": false,
              "index": 3
            }
          ]
        }
      ]
    },
    {
      "service_code": "N",
      "service_name": "Income Support and Employment",
      "subservices": [
        {
          "service_code": "ND",
          "service_name": "Employment",
          "active": false,
          "sub_active": 0,
          "sub_count": 1,
          "subservices": [
            {
              "service_code": "ND-2000",
              "service_name": "Employment Preparation",
              "active": false,
              "index": 1
            }
          ]
        }
      ]
    },
    {
      "service_code": "P",
      "service_name": "Individual and Family Life",
      "subservices": [
        {
          "service_code": "PH",
          "service_name": "Individual and Family Support Services",
          "active": false,
          "sub_active": 0,
          "sub_count": 1,
          "subservices": [
            {
              "service_code": "PH-1000",
              "service_name": "Case/Care Management",
              "active": false,
              "index": 1
            }
          ]
        },
        {
          "service_code": "PN",
          "service_name": "Support Groups",
          "active": false,
          "sub_active": 0,
          "sub_count": 3,
          "subservices": [
            {
              "service_code": "PN-8100.3000-050",
              "service_name": "Cancer Support Group",
              "active": false,
              "index": 1
            },
            {
              "service_code": "PN-8100.5000",
              "service_name": "Mental Health Related Support Groups",
              "active": false,
              "index": 2
            },
            {
              "service_code": "PN-8100.9000",
              "service_name": "Wellness Support Group",
              "active": false,
              "index": 3
            }
          ]
        }
      ]
    }
  ]
}
