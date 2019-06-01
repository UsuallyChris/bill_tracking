""" route definitions for users app """
from django.urls import path, include

urlpatterns = [
    path('account/', include('rest_email_auth.urls'))
]
