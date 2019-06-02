""" serializer for bills app """
from rest_framework import serializers
from .models import Bill


class BillSerializer(serializers.ModelSerializer):
    """ serializer for Bill model """
    class Meta:
        model = Bill
        fields = '__all__'
