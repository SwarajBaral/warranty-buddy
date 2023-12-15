import { Request, Response } from "express";

class UserController
{
    public GetWarrantyList(req: Request, res: Response): void
    {
        res.json({
            user: {
                firstName: "Swaraj",
                lastName: "Baral",
                userName: "iheartwarranties420",
                joinedOn: "22/08/23",
                dob: "11/08/2000",
                emailId: "baralswaraj40@gmail.com",
                isEmailVerfied: true,
                phone: {
                    countryCode: "+91",
                    number: "9861168404",
                    isPhoneVerified: true,
                },
            },
            warrantyList: [
                {
                    product: {
                        productName: "LG Washing Machine",
                        userFriendlyName: "my washing machine",
                        company: "LG",
                        category: "electrical-appliances",
                        subCategory: "washing-machine",
                        productId: "lg-wm-2023-kqwlio204",
                        purchasedOn: "13/08/2023",
                        registeredOn: "20/08/2023",
                        productImage:
                            "https://example.com/lg-washing-machine.jpg",
                    },
                    warrantyInfo: {
                        extendedWarranty: false,
                        warrantyPeriod: "3y",
                        claimMethod: "web",
                        claimLink: "https://example.com",
                        claimNumber: null,
                        claimNotes: null,
                        warrantyTnC:
                            "https://files.mutualcdn.com/elmley/files/1-Test_PDF.pdf",
                    },
                },
                {
                    product: {
                        productName: "Samsung Refrigerator",
                        userFriendlyName: "my refrigerator",
                        company: "Samsung",
                        category: "electrical-appliances",
                        subCategory: "refrigerator",
                        productId: "samsung-rf-2023-abcxyz123",
                        purchasedOn: "15/09/2023",
                        registeredOn: "22/09/2023",
                        productImage:
                            "https://example.com/samsung-refrigerator.jpg",
                    },
                    warrantyInfo: {
                        extendedWarranty: true,
                        warrantyPeriod: "5y",
                        claimMethod: "phone",
                        claimLink: null,
                        claimNumber: "SNGWRR12345",
                        claimNotes: "Contact customer support for assistance",
                        warrantyTnC:
                            "https://files.samsungcdn.com/docs/warranty_terms.pdf",
                    },
                },
                {
                    product: {
                        productName: "Sony Smart TV",
                        userFriendlyName: "my smart TV",
                        company: "Sony",
                        category: "electronics",
                        subCategory: "television",
                        productId: "sony-tv-2023-def456789",
                        purchasedOn: "01/07/2023",
                        registeredOn: "08/07/2023",
                        productImage: "https://example.com/sony-smart-tv.jpg",
                    },
                    warrantyInfo: {
                        extendedWarranty: true,
                        warrantyPeriod: "2y",
                        claimMethod: "email",
                        claimLink: null,
                        claimNumber: "SONYTV78901",
                        claimNotes: "Email your claim to support@example.com",
                        warrantyTnC:
                            "https://files.sony.com/docs/tv_warranty_terms.pdf",
                    },
                },
            ],
        });
    }
}

export const userController = new UserController();
