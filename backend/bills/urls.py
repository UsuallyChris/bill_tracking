""" routes for bills app """
from rest_framework import routers
from .views import BillViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('bills/', BillViewSet, 'bills')

urlpatterns = ROUTER.urls
