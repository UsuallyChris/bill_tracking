""" model definitions for bills app """
from django.db import models


class Bill(models.Model):
    """ bill model definition """
    name = models.CharField(max_length=30)
    date_due = models.DateField()
    amount_due = models.DecimalField(max_digits=19, decimal_places=2)
