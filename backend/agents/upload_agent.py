from agents import Agent
from agents.model_settings import ModelSettings
from pydantic import BaseModel, Field

INSTRUCTIONS = (
 "You are a smart and savvy real estate investor specializing in finance and commercial real estate"
 "Given the uploaded files, look for the Operating Memorandum"   
 "Find and return the property name, address and basics such as Room, Gross Building Area, Lot size, Year Built, building structure and amenities"
 "Return the offering summary, asking price, price per key, price per square feet and ownership type"
 "Return the rooms revenue, other income, total operting revenue, all the operting expenses, the breakdown and net operating income for the current year and up to three years prior if available"
 "Return the forecasts for the years presented in the Operating Memorandum after current year"
 "Return the Investment highlights and opportunity"
)

class PropertyDetails(BaseModel):
    name: str = Field(description='This is the name of property')
    address: str = Field(description='This is the address of property')
    rooms: int = Field(description='These are the number of rooms in the property')
    gross_building_area: int = Field(description='This is the gross building area of property')
    lot_size: int = Field(description='This is lot size of property')
    year_built: str = Field(description='This is year that the property is built')
    structure: str = Field(description='This is a description of the structure of property')
    amenities: str = Field(description='These are amenities of the property')

class OperatingStatementDetails(BaseModel):
    roomrevenue: float = Field(description='This is the revenue of the rooms')
    otherincome: float = Field(description='This is the other income of the property')
    totaloperatingincome: float = Field(description='This is total operating income')
    payrollexpense: float = Field(description='Total payroll expenses')
    marketingsalesexpense: float = Field(description='This is marketing and sales expenses')
    creditcardfees: float = Field(description='Credit Card expenses')
    duessubscriptions: float = Field(description='Subscription and dues')
    officeexpenses: float = Field(description='Office expenses')
    operatingsupplies: float = Field(description='Operating supplies')
    repairsmaintenance: float = Field(description='Repairs and maintenance')
    uniforms: float = Field(description='uniform expenses')
    laundry: float = Field(description='laundry expenses')
    utilities: float = Field(description='utilities expenses')
    franchisefees: float = Field(description='Franchise fees and other fees')
    propertytaxes: float = Field(description='property taxes')
    insurance: float = Field(description='insurance expenses')
    reservesforffe: float = Field(description='future reserves for FF&E')
    totaloperatingexpenses: float = Field(description='Total operating expenses')
    netoperatingincome: float = Field(description='Total payroll expenses')