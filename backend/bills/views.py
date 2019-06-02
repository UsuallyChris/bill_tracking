""" view definitions for bills app """
from rest_framework import viewsets, permissions
from .models import Bill
from .serializers import BillSerializer


class BillViewSet(viewsets.ModelViewSet):
    """ ViewSet for Bill model """
    queryset = Bill.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BillSerializer
