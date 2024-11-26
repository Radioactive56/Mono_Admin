from django.contrib import admin
from base.models import *
# Register your models here.

admin.site.register(Meta_Dashboard)
admin.site.register(Nmap_Core_Dashboard)
admin.site.register(Meta_Scan_Table)
admin.site.register(Meta_Host_Table)
admin.site.register(Meta_Service_Table)
admin.site.register(Meta_Vulnerability_Table)
admin.site.register(Scan)
admin.site.register(Host)
# admin.site.register(Users)