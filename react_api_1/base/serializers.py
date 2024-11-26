from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Meta_Dashboard,Nmap_Core_Dashboard,Meta_Scan_Table, Meta_Host_Table, Meta_Service_Table, Meta_Vulnerability_Table,Scan,Host

class Meta_scan_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Meta_Scan_Table
        fields = '__all__'

class Meta_Host_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Meta_Host_Table
        fields = '__all__'

class Service_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Meta_Service_Table
        fields = '__all__'

class Vulnerability_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Meta_Vulnerability_Table
        fields = '__all__'

class Meta_serializer(serializers.ModelSerializer):
    class Meta:
        model=Meta_Dashboard
        fields= "__all__"

class Nmap_serializer(serializers.ModelSerializer):
    class Meta:
        model=Nmap_Core_Dashboard
        fields="__all__"

class Scan_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Scan
        fields="__all__"

class Host_Serializer(serializers.ModelSerializer):
    class Meta:
        model=Host
        fields="__all__"
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','is_active','is_staff','is_superuser']