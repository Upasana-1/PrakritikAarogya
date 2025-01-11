from django.shortcuts import render

# Create your views here.
def products(request):
    context = {
        "products": [
            {"name": "Mix Sattu", "price": 100, "description": "Mix Sattu is a healthy drink made from roasted gram flour. It is a rich source of protein and is a great energy drink.", "image": "sattu.png"},
            {"name": "Banana Chips", "price": 200, "description": "Banana Chips are a healthy snack made from raw bananas. They are a great source of potassium and are a great snack for kids.", "image": "bananachips.png"},
            {"name": "Pustakari", "price": 300, "description": "Pustakari is a traditional sweet made from jaggery and wheat flour. It is a great source of energy and is a great snack for kids.", "image": "pustakari.png"},
        ]
    }
    return render(request, "products/products.html", context)